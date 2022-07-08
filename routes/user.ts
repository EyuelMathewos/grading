import express, { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();
const {validator} = require('../validator/index');
const {createValidation} = require('../validator/userValidation');
router.route("/")
.get(async (req: Request, res: Response) => {
    const user = await prisma.User.findMany({});
    res.json(user);
})
.post(async (req: Request, res: Response) => {
  try{
    validator(req.body, createValidation, {}).then(async (response: any) => {
      const valdationStatus: boolean = response.status;
      if( valdationStatus ){
            const user = await prisma.User.create({
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

//CourseEnrollment
router.route("/:userId/courses")
    .get(async (req: Request, res: Response) => {
        const userId = parseInt(req.params.userId);
        const courseenrollment = await prisma.CourseEnrollment.findMany({
            where: {
              userId,
            },
        }).catch((error: string) => {
            res.json(error)
        })
        res.json(courseenrollment);
    })
module.exports = router;