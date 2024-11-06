import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define a type for initial data that excludes setFormData
type InitialFormData = {
  position: string;
  employer: string;
  startDate: string;
  finishDate: string;
  jobDescription: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  aboutInfo: string;
  uploadedImgUrl: string;
};

// Define FormData type, including setFormData
type FormData = InitialFormData & {
  setFormData: React.Dispatch<React.SetStateAction<InitialFormData>>;
};

// Create the context with FormData type or undefined
const FormDataContext = createContext<FormData | undefined>(undefined);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<InitialFormData>({
    name: localStorage.getItem("name") || "",
    surname: localStorage.getItem("surname") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    aboutInfo: localStorage.getItem("aboutInfo") || "",
    uploadedImgUrl: localStorage.getItem("uploadedImgUrl") || "",
    // experiences: [
    //   {
    position: localStorage.getItem("position") || "",
    employer: localStorage.getItem("employer") || "",
    startDate: localStorage.getItem("startDate") || "",
    finishDate: localStorage.getItem("finishDate") || "",
    jobDescription: localStorage.getItem("jobDescription") || "",
    //   },
    // ],
  });

  // Update localStorage whenever formData changes
  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [formData]);

  // Provide formData and setFormData as a single object
  const value = { ...formData, setFormData };

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to use formData context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
