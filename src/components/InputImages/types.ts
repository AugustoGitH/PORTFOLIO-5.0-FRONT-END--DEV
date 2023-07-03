export interface IImageSelected {
  preview: string;
  fileImage: File | null;
}

export interface IInputImageProps {
  onChange: (image: IImageSelected) => void;
  label: string;
  onDelete?: (image: IImageSelected) => void;
  value?: IImageSelected;
}

export interface IImagesSelected {
  cover: IImageSelected;
  imageSec01: IImageSelected;
  imageSec02: IImageSelected;
  imageSec03: IImageSelected;
  imageSec04: IImageSelected;
}

export interface IChangeInputImages {
  cover: string | null;
  images: string[] | null;
}

export interface IInputImagesProps {
  onChange?: (images: IChangeInputImages) => void;
  reset?: boolean;
  error?: boolean;
  helperText?: string;
}
