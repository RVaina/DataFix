import React from "react";
import { FileChartPie, Import } from "lucide-react";

const ETAPE = [
    {
        "numero": 1,
        "consigne": "Importer votre fichier .xlxs, xls, csv puis attendre que le system finisse de l'annalyser.",
    },
    {
        "numero": 2,
        "consigne": "Dans la nouvelle fenetre vous pourriez choisir votre actions: supprimer les doublons, remplir les donnes manquante,  typer une colonne, nommer ou modifier le nom de chaque colonne, etc.... Certaine champs comme email et telephone sont deja corriger automatiquement.",
    },
    {
        "numero": 3,
        "consigne": "Vous pouvez exporter le fichier final nettoyez en format .xlxs a l'aide d'une boutons tout en bas de la page."
    }
]


function Hero() {
    
    return(
        <div className="flex items-center flex-col ">
            {/* badge */}
            <div className="bg-btn-primary text-center text-xs   text-white w-27 h-5 rounded-md mt-8">
                100% -for free
            </div>

            {/* titre */}
            <div className="flex flex-col mt-7 items-center">
                <h1 className="text-text-primary text-2xl font-brand flex flex-row items-center">DataFix<FileChartPie className="text-text-primary"/></h1>
                <p className="text-text-secondary font-body mt-1">Nettoyez vous fichier excel gratuitement </p>
            </div>

            {/* section contenue principale */}
            <div className="flex flex-col items-center w-7/12 mt-8 text-gray-400 text-sm">
                <p className="text-text-secondary font-body">
                    Importer vorte fichier qui sera tout de suite annalyser. Detecte et supprime les doublons, valeurs manquantes, 
                    erreurs de format, incoherances et autres facteurs de qualite. 
                </p>
                <div className="flex justify-between px-3 rounded-2xl rounded-tl-none rounded-br-none overflow-hidden py-1 w-full border-3 border-border mt-8 items-center">
                    <div className="flex flex-row items-center gap-4">
                        <div className="border-2 border-border w-10 h-10 rounded-[100%] flex items-center justify-center cursor-pointer"><Import className="text-blue-500 hover:text-blue-950"/></div>
                        <div className="flex flex-col">
                            <p className="text-black mt-2">Importer votre fichier</p>
                            <p className="text-text-secondary mb-2">Importer depuis votre ordinateur</p>
                        </div>
                    </div>
                    
                    <div className="mr-2">
                        <button className="bg-btn-primary w-27 h-10 text-white rounded-lg cursor-pointer hover:bg-btn-hover">Importer</button>
                    </div>
                </div>
                supporte .xlxs, xls, csv
            </div>

            {}
            <h2 className="text-text-primary font-heading">
                Comment l'utiliser?
            </h2>
            <div className="flex flex-col items-center">
                { ETAPE.map((etape) => (
                    <div key={etape.numero} className="p-1 w-6/12">
                        <h3 className="text-text-primary font-body">Etape {etape.numero}</h3>
                        <p className="text-text-secondary font-body">{etape.consigne}</p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Hero;