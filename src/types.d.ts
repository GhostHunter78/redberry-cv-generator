export type HeaderProps = {
  pageTitle: string;
  PageNumber: string;
};

export type LocationProps = {
  previousLocation: string;
};

export type GeneralButtonProps = {
  buttonBgColor: string;
};

export type CvComponentProps = {
  name?: string | undefined;
  surname?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  aboutInfo?: string | undefined;
  uploadedImgUrl?: string | null;
};
