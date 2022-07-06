import express, { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

router.route("/")
.post(async (req: Request, res: Response) => {
  try{
    const user = await prisma.user.create({
        data: {
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          social: req.body.social
        },
      });
      res.send(user)
    }catch(error){
      res.send(error)
    }

})
module.exports = router;