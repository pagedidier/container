class AbstractRepository {
    constructor(axiosService, basePath, path) {
        this.axiosService = axiosService;
        this.path = path;
        this.basePath = basePath;
    }

    fetchAll(query = null) {
        return this.axiosService.get(this.basePath, this.path, true, query);
    }

    fetchOne(id) {
        return this.axiosService.get(this.basePath, `${this.path}/${id}`);
    }

    create(object) {
        return this.axiosService.post(this.basePath, this.path, object);
    }

    update(id, object) {
        return this.axiosService.put(this.basePath, `${this.path}/${id}`, object);
    }

    delete(id) {
        return this.axiosService.delete(this.basePath, `${this.path}/${id}`);
    }
}

export default AbstractRepository;
