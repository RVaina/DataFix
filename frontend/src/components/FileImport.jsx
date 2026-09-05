import { useState } from "react";
import api from "../services/api";
import { Import } from "lucide-react";

function FileImport() {
    const [file, setfile] = useState(null);
    const [message, setmessage] = useState("Importer depuis votre ordinateur");

    const handleFileChange = (e) => {
        setfile(e.target.files[0]);
        setmessage(e.target.files[0].name);
    };

    const handleUpload = async ( ) => {
        console.log("fa manin ty no mande")
        if (!file) {
            setmessage("veuiller entrer le fichier");
            return;
        };

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await api.post("importFile/", 
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setmessage(res.data.message);
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="flex justify-between px-3 rounded-2xl rounded-tl-none rounded-br-none overflow-hidden py-1 w-full border-3 border-border mt-8 items-center">
            <div className="flex flex-row items-center gap-4 ">
                <label htmlFor="file-input" className="border-2 border-border w-10 h-10 rounded-[100%] flex items-center justify-center cursor-pointer">       
                  <Import className="text-blue-500 hover:text-blue-950"/>
                </label>
                <input type="file" id="file-input" className="hidden" onChange={handleFileChange} />

                <div className="flex flex-col hidden md:block">
                    <p className="text-black mt-2">Importer votre fichier</p>
                    <p className="text-text-secondary mb-2 ">{message}</p>
                </div>
            </div>
            
            <div className="mr-2">
                <button className="bg-btn-primary w-27 h-10 text-white rounded-lg cursor-pointer hover:bg-btn-hover" onClick={handleUpload}>Importer</button>
            </div>
        </div>
    )
}

export default FileImport;