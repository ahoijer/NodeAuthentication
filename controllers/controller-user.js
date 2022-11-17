// importera database


// models | Schemas
import { UserSchema } from '../models/UserSchema.js';

// check if obj passes schema validation 

let obj = {firstName: 'Flisa', lastName: 'Hedenhös'};

//https://www.npmjs.com/package/validate
//.validate() function returns an array of validation errors.
const errors = UserSchema.validate(obj);

// check: if errors skip database call...'
if (errors.length > 0) {

}
