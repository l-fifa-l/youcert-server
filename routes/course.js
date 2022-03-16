import express from 'express';
import {
  addCourse,
  getAllCourse,
  getACourse,
  completeCourse,
  incompleteCourse,
  completedCourse,
  // postCertificate,
  getCertificate,
} from '../controllers/course';
import { requireSignin } from '../middleware';

const router = express.Router();

router.post('/addcourse', requireSignin, addCourse);
router.get('/getallcourse', getAllCourse);
router.get('/course/:id', getACourse);

// mark complete or incomplete course
router.post('/mark-completed', requireSignin, completeCourse);
router.post('/mark-incompleted', requireSignin, incompleteCourse);
router.post('/completed-course', requireSignin, completedCourse);

// certificate
// router.post('/postCertificate', requireSignin, postCertificate);
router.post('/getCertificate', requireSignin, getCertificate);
module.exports = router;
