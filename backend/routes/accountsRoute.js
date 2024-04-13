import express from 'express';
import { accounts } from '../models/accountModel.js';

const router = express.Router();

// Create account
router.post('/', async (req, res) => {
    try{
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({ message: 'Send all required fields: name, email, password' });
        }

        const newAccount = { name, email, password };

        const account = await accounts.create(newAccount);

        return res.status(201).send(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

// Get SOME accounts
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

// Get ALL account
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

// Login Checker
router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;

        const account = await accounts.findOne({ email });

        if (!account || account.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }

        return res.status(200).json({ message: 'Login successful', account });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

export default router;