/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, type MouseEventHandler } from "react"

import Image from "next/image"

import { modelNewImagesSelected } from "./models"
import * as S from "./styles"
import { type IInputImagesProps, type IImageSelected, type IInputImageProps, type IImagesSelected } from "./types"



const InputImage = ({ onChange, label, onDelete, value }: IInputImageProps): JSX.Element => {
  const idLabel = Math.random().toString(16).substring(2, 16)
  const [imageSelected, setImageSelected] = useState<IImageSelected>({
    preview: value?.preview ?? "",
    fileImage: value?.fileImage ?? null
  })


  function handleImageSelect(event: any): void {
    const file: File = event.target.files[0];
    if (!file) return;


    const reader = new FileReader();
    reader.onload = (e: any) => {
      const newImageSelected = {
        preview: e.target.result,
        fileImage: file
      }
      setImageSelected(newImageSelected);

      onChange(newImageSelected)

    };
    reader.readAsDataURL(file);
  }


  useEffect(() => {
    if (value) {
      setImageSelected(value)
    }
  }, [value])

  const handleDeleteImage: MouseEventHandler<HTMLButtonElement> = (ev): void => {
    ev.preventDefault()
    if (onDelete) onDelete(imageSelected)
    setTimeout(() => {
      setImageSelected({
        fileImage: null,
        preview: ""
      })
      onChange({
        fileImage: null,
        preview: ""
      })
    }, 100)
  }

  return (
    <S.InputImage>
      <label htmlFor={idLabel}>
        <i className='bx bxs-image image-icon'></i>
        <span>{label}</span>
        {imageSelected.preview && (<Image src={imageSelected.preview} alt={idLabel} width={400} height={300} />)}

        <ul className="buttons-edit">
          {
            imageSelected.preview && (
              <button className="delete-image" onClick={handleDeleteImage}>
                <i className='bx bxs-trash-alt' />
              </button>
            )
          }
        </ul>

      </label>
      <input id={idLabel} type="file" onChange={handleImageSelect} />
    </S.InputImage>
  )
}




const InputImages = ({ onChange, reset, helperText, error = false }: IInputImagesProps): JSX.Element => {

  const [showSelectImages, setShowSelectImages] = useState(false)
  const [imagesSelected, setImagesSelected] = useState<IImagesSelected>(modelNewImagesSelected)

  const handleChangeInputImage = useCallback((imagesSelectParm: IImagesSelected): void => {

    const transformImagesSecInArray = (): string[] | null => {
      const imagesSec = Object.values(
        Object.assign({}, imagesSelectParm, { cover: undefined })
      ).filter(Boolean) as IImageSelected[]
      return imagesSec.filter(imgS => imgS.fileImage && imgS.preview).map(imgS => imgS.preview)
    }
    if (onChange) {
      onChange({
        cover: imagesSelectParm.cover.preview,
        images: transformImagesSecInArray()
      })
    }
  }, [onChange])


  useEffect(() => {
    document.body.classList[showSelectImages ? "add" : "remove"]("overflowY-none")
  }, [showSelectImages])



  useEffect(() => {
    if (reset) {
      setImagesSelected(modelNewImagesSelected)
    }
  }, [reset])

  useEffect(() => {
    handleChangeInputImage(imagesSelected)
  }, [imagesSelected])


  const handleAddImage = (key: string, value: IImageSelected): void => {

    setImagesSelected(prevImages => ({ ...prevImages, [key]: value }))
  }

  const handleOpenSelectImages: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault()
    setShowSelectImages(true)
  }

  const imageShowCase = Object.entries(imagesSelected).map(([, { preview }]) => preview)

  return (
    <S.InputImageContainer error={error}>
      <button
        className="button-show-selected-images"
        onClick={handleOpenSelectImages}>
        <i className='bx bxs-image-add' />Escolha as imagens para o projeto
      </button>
      {helperText && (<small className="helper-text">{helperText}</small>)}
      <ul className="image-showcase">
        {
          imageShowCase.map((image, index) => (
            <li key={`img-show-case-${index}`} onClick={() => { setShowSelectImages(true); }}>
              {
                image ? <Image src={image} alt={`img-show-case-${index}`} width={300} height={200} /> : <i className='bx bxs-image'></i>
              }
            </li>
          ))
        }
      </ul>
      {
        showSelectImages && (
          <div className="popup-selected-images">
            <div className="card">
              <button onClick={() => { setShowSelectImages(false); }} className="button-close-popup">
                <i className='bx bx-x' />
              </button>

              <ul className="list-input-images">
                <InputImage
                  label="Adicione a imagem da capa"
                  value={imagesSelected.cover}
                  onChange={img => { handleAddImage("cover", img); }}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected.imageSec01}
                  onChange={img => { handleAddImage("imageSec01", img); }}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected.imageSec02}
                  onChange={img => { handleAddImage("imageSec02", img); }}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected.imageSec03}
                  onChange={img => { handleAddImage("imageSec03", img); }}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected.imageSec04}
                  onChange={img => { handleAddImage("imageSec04", img); }}
                />
              </ul>
            </div>
          </div>
        )
      }
    </S.InputImageContainer>
  )
}


export default InputImages