"use client";

import React from "react";
import { Button } from "../parkUI/Button";
import { Input } from "../parkUI/Input";
import { imageAction } from "@/app/lib/actions";
import Image from "next/image";
import { styled } from "@/styled-system/jsx";
import { useFormState } from "react-dom";
import { hstack, vstack } from "@/styled-system/patterns";
import { Card } from "../parkUI/Card";

type Props = {};

const ImageForm = (props: Props) => {
  const [inputImage, setInputImage] = React.useState<string>("");
  const [outputImage, formAction] = useFormState<any>(imageAction, "");
  return (
    <div className={vstack({ gap: "0.5rem" })}>
      <h2>Velg bilde å konvertere</h2>
      <form action={formAction}>
        <div className={vstack({ gap: "0.5rem" })}>
          <Input
            type="file"
            name="image"
            onChange={(e: any) => {
              if (e?.target?.files?.length > 0)
                setInputImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <Input
            type="text"
            name="imagePrompt"
            placeholder="Skriv hva du vil skal skje med bildet"
          />
          <Button type="submit">Trykk på meg</Button>
        </div>
      </form>
      <div className={hstack({ gap: "1rem" })}>
        {inputImage && (
          <Card>
            <ImageWrapper>
              <Image src={inputImage} alt={"input image"} fill />
            </ImageWrapper>
          </Card>
        )}
        {outputImage && (
          <ImageWrapper>
            <Image src={outputImage} alt={"output image"} fill />
          </ImageWrapper>
        )}
      </div>
    </div>
  );
};

const ImageWrapper = styled("div", {
  base: {
    "& img": {
      objectFit: "cover",
      padding: "1rem",
    },
    width: "49vw",
    height: "300px",
    position: "relative",
  },
});

export default ImageForm;
