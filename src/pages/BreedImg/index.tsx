import React from "react";
import {styled} from "styled-components";

type Cat = {
    breeds : [{name: string,description: string }]
    height : number
    id : string
    url : string
    width : number
}

type BreedInfo = {
    name: string,
    description: string
}

export const BreedImg: React.FC<{ cat: Cat, handleImageClick:(cat: Cat) => void, handleText: (bred: BreedInfo) => void}>  = ({ cat, handleImageClick, handleText }) => {

    const toggleImage = (img : Cat) => {
        handleImageClick(img)
        handleText({name :cat.breeds[0]?.name, description: cat.breeds[0]?.description})
    };


    return (
        <>
            <ImgWrapper
                onClick={() => toggleImage(cat)}
                src={cat.url}
                alt="Image"
            />
        </>
    )
}

const ImgWrapper = styled.img`
 width: 100px;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
`