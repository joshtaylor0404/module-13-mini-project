const router = require('express').Router();
const { Trip } = require('../../models');

// create
router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (error) {
        res.status(400).json(error);
    }
})

// delete
router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trip.destroy({ where: { id: req.params.id } });

        if(!tripData) {
            res.status(404).json({ message: 'No trip with this id!'});
            return;
        }
        
        res.status(200).json(tripData);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;