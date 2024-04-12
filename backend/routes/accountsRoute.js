import express from 'express';
import { accounts } from '../models/accountModel.js';

const router = express.Router();

// Create account
router.post('/', async (req, res) => {
    try{
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.password 
        ){
            return res.status(400).send({
                message: 'Send all required field: name, email, password',
            });
        }
        const newAccount = {
            name: req.body.name,
            email: req.body.email, 
            password: req.body.password,
        };

        const account = await accounts.create(newAccount);

        return res.status(201).send(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

// Get ALL accounts
router.get('/:id', async (req, res) => {
    try{

        const { id } = req.params;

        const account = await accounts.findById(id);

        return res.status(200).send(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

// Get SOME account
router.get('/', async (req, res) => {
    try{
        const account = await accounts.find({});

        return res.status(200).send({
            count: account.length,
            data: account
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

// Edit account
router.put('/:id', async (req, res) => {
    try{
        if(
            !req.body.name ||
            !req.body.password 
        ){
            return res.status(400).send({
                message: 'Send all required field: name, email, password',
            });
        }

        const { id } = req.params;

        const result = await accounts.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json ({ message: ' Account not found'});
        }

        return res.status(200).send({ message: 'Account updated successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

// Delete account by Id
router.delete('/:id', async (req, res) => {
    try{

        const { id } = req.params;

        const result = await accounts.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json ({ message: ' Account not found'});
        }
        
        return res.status(200).send({ message: 'Account deleted successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

export default router;