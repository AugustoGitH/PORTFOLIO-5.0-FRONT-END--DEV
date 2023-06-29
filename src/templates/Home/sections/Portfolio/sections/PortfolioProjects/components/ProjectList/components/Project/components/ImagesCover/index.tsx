import { useState } from 'react';

import Image from 'next/image';

import ImagesViewScreen from '../../../../../../../../../../../../patterns/ImagesViewScreen';
import * as S from './styles';
import { type IImagesCoverProps, type IVierScreen } from './types';

const ImagesCover = ({ cover, images }: IImagesCoverProps): JSX.Element => {
  const [viewScreen, setViewScreen] = useState<IVierScreen>({
    show: false,
    mainImage: cover
  });

  const handleOpenViewScreen = (mainImage: string): void => {
    setViewScreen({
      show: true,
      mainImage
    });
  };

  const createImagesProject = (): JSX.Element[] => {
    if (!images)
      return [
        <li key="li-image-cover-0" />,
        <li key="li-image-cover-1" />,
        <li key="li-image-cover-2" />,
        <li key="li-image-cover-3" />
      ];
    const imagesList = [];
    for (let i = 0; i < 4; i++) {
      imagesList.push(
        images[i] ? (
          <li
            key={i}
            onClick={() => {
              handleOpenViewScreen(images[i]);
            }}
          >
            <Image
              src={images[i]}
              alt={`image secundary ${i}`}
              width={70}
              height={50}
            />
          </li>
        ) : (
          <li key={i} className="image-empty">
            <i className="bx bxs-image-alt" />
          </li>
        )
      );
    }
    return imagesList;
  };

  return (
    <S.ImagesCover>
      <ImagesViewScreen
        viewScreen={viewScreen}
        images={[cover, ...(images ?? [])]}
        onClose={() => {
          setViewScreen((prevViewS) => ({ ...prevViewS, show: false }));
        }}
      />
      <div
        className="cover"
        onClick={() => {
          handleOpenViewScreen(cover);
        }}
      >
        <Image
          src={cover}
          alt={`image ${cover[cover.length - 1]}`}
          width={300}
          height={200}
        />
      </div>
      <ul className="images-project">{createImagesProject()}</ul>
    </S.ImagesCover>
  );
};

export default ImagesCover;
