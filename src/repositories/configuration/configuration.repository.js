import AxiosService from "../../services/axios.service";
import AbstractRepository from "../abstract.repository";

class ConfiguratorRepository extends AbstractRepository {
    constructor(basePath, path) {
        super(AxiosService, basePath, path);
    }
}

export default ConfiguratorRepository;
