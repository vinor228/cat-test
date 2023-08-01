import React, {useEffect, useState} from "react";
import catsOperation from "../../redux/cats/catsOperation";
import  {selectCount} from "../../redux/cats/catSlice";
import {BreedImg} from "../BreedImg";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {motion, useScroll} from "framer-motion";

import styled from "styled-components";

type BreedInfo = {
    name: string,
    description: string
}


type Cat = {
    breeds : [{name: string, description: string}]
    height : number
    id : string
    url : string
    width : number
}
export const ScrollBreeds: React.FC<{ handleTextDisplay: (breed: BreedInfo) => void}> = ({handleTextDisplay}) => {

    const dispatch = useAppDispatch();
    const cats = useAppSelector(selectCount)
    const [visible, setVisible] = useState(false);
    const [chosenBreed, setChosenBreed] = useState<string | boolean>();




    const handleImageClick = (cat : Cat) => {
        setChosenBreed(cat.url)
    };

    const handelBackToList = () => {
        setChosenBreed(false)
        handleTextDisplay({name: '', description: ''})
    }

    useEffect(()=> {
        // @ts-ignore
        dispatch(catsOperation.getCatsByBreed())

            const delay = setTimeout(() => {
                setVisible(true);
            }, 1000);

            return () => clearTimeout(delay);

    }, [])

    return (
        <ScrollContainer>
            {chosenBreed && (
                <motion.img
                    src={chosenBreed as string}
                    style={{
                        width:'1px',
                        height:  '100%' ,
                        objectFit: 'cover',
                        borderRadius: chosenBreed ? '0' : '20px',
                        zIndex: 10,
                        position: 'absolute',}}
                    initial={{width: '1px',
                        height: '100%',
                        left: '52%'}}
                    animate={{
                        left: '8%',
                        width:  '240px' ,
                        height: '100%',}}
                    transition={{
                        duration:2,
                    }}
                    onClick={handelBackToList}>

                </motion.img>
            )}

            {visible && (
            <motion.div
                style={{
                    height: '100%',
                    width:  '240px',
                    overflowX: 'auto',
                    position: 'fixed', }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{duration: 4}}
                exit={{ y: 0 }}  >
            {cats.map((cat, index) => (
                <BreedImg cat={cat} handleText={handleTextDisplay} handleImageClick={handleImageClick} key={index}/>
            ))}
        </motion.div>
            )}

        </ScrollContainer>
    )
}

const ScrollContainer = styled.div`
  transform: skewX(15deg);
    width: 240px;
    height: 100%;
    position: fixed;
    gap: 10px;    
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    ::-webkit-scrollbar {
      display: none;
    }
  
 
`

