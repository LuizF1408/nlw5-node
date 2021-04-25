import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";

interface ISettingsCreate{

  chat:boolean;
  username:string;
}

class SettingsService {
  async create({chat,username}:ISettingsCreate){
    
    const settingsRepository = getCustomRepository(SettingsRepository)

    //Verifica se existe user
    const userAlreadyExists = await settingsRepository.findOne({
      username
    });
    if (userAlreadyExists){
      throw new Error("User already exists!")
    }

    //Salva user no DB
    const settings = settingsRepository.create({
        chat,
        username

    })
    await settingsRepository.save(settings)

    return settings

   
    

  }

}

export {SettingsService}