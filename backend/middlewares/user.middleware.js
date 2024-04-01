import jwt from 'jsonwebtoken'
export const verifyAdmin = (req, res, next) => {
    const token = req.cookies.admin_token;
    jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, decoded) => {
        if(err || !(decoded.isAdmin)) {
            return res.status(401).json({ message: "Access denied" });
        }
        else{

            next()
        }
        
    });

}