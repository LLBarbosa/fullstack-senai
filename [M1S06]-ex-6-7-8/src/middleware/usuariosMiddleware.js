
const validateRole = (req, resp, next) => { // exercício 8 - implementando o middleware
    const role = req.body.cargo;
    const isLeader = role !== undefined && ["LIDER", "LÍDER"].includes(role.toUpperCase());
    if (!isLeader) {
        resp.status(400).json({ "mensagem": "Somente líderes podem criar usuários" })
    } else {
        req.body.cargo = "lider";
        next();
    }
}

module.exports = {
    validateRole

}