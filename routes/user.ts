import express, { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();
const {validator} = require('../validator/index');
const {createValidation} = require('../validator/userValidation');
router.route("/")
.post(async (req: Request, res: Response) => {
  try{
    validator(req.body, createValidation, {}).then(async (response: any) => {
      const valdationStatus: boolean = response.status;
      if( valdationStatus ){
            const user = await prisma.user.create({
              data: {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                social: req.body.social
              },
            });
            res.send(user)
      }
    }).catch((error: Error) => {
      res.status(412)
      res.send(error)
    });
    }catch(error){
      res.send(error)
    }

})
module.exports = router;