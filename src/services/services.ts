const jwt = require("jsonwebtoken");
const SECRET = "devDegany";

const generateToken = (id : number | undefined, email : string | undefined) => {
    const token = jwt.sign(
        {
            id,
            email,
        },
        SECRET,
        { 
            expiresIn: "365d" 
        }
    );
    return token;
}

export {
    generateToken,
}