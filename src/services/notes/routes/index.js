import express from 'express';
import {
createNote, getAllNotes, getNoteById, editNoteById, deleteNoteById
} from '../controller/note-controller.js';
import validate from '../../../middlewares/validate.js';
import { notePayloadSchema } from '../../../services/notes/validator/schema.js';
import { validateQuery } from '../../../middlewares/validate.js';
import { noteQuerySchema } from '../validator/schema.js';

const router = express.Router();
 
router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(notePayloadSchema), editNoteById);
router.delete('/notes/:id', deleteNoteById);
 
router.get('/notes', validateQuery(noteQuerySchema), getAllNotes);
export default router;