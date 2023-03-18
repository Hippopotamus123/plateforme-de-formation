var userModel=require('../model/formationModel');




module.exports.createFormationDBService = (formationDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        var formationModelData = new userModel();
  
        formationModelData.nameFormation = formationDetails.nameFormation;
        formationModelData.dateAjout = formationDetails.dateAjout;
        formationModelData.description = formationDetails.description;
       
      
  
        const result = await formationModelData.save();
        if (result) {
          resolve(true);
        } else {
          reject(new Error("Failed to save student data."));
        }
      } catch (error) {
        console.error("Error while saving student data: ", error);
        reject(new Error("Failed to save student data."));
      }
    });
  };


module.exports.updateFormationDBService = (id, updateDetails) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await userModel.findByIdAndUpdate(id, updateDetails, { new: true });

      if (result) {
        resolve(result);
      } else {
        reject(new Error("Impossible de mettre à jour la formation."));
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la formation : ", error);
      reject(new Error("Impossible de mettre à jour la formation."));
    }
  });
};
