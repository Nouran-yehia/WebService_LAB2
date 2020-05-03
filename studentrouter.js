const express = require('express')
const router = express.Router();

const data = []


router.post('/',(req, res,next) => {
    const { body: { name, age , courses , married, id} } = req;
    data.push({
        name,
        age,
        courses,
        married,
        id
    })
    res.json(data)
})

router.get('/:id',(req,res,next)=>{
    const student = data.filter(data=> student.id == req.params.id)
    res.json(student)
})

router.delete('/:id',(req,res,next)=>{
    const index = data.indexOf(req.params.id);
    if (index > -1) {
      data.splice(index, 1);
    }
    res.json(data)
})
router.put('/:id',(req,res,next)=>{
const body = req.body;
const student = data.filter(data=> student.id == req.params.id)
const index = data.indexOf(student);

if (!student) {
  res.status(500).send('Student not found.');
} else {
  const updatedStudent = { 
    "name": body.name,
    "age": body.age,
    "courses": body.courses,
    "married":body.married,
    "id":body.id
   };
  data[index] = updatedStudent;

  res.send(updatedStudent);
}
})

module.exports = router