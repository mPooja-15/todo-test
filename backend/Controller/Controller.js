const User = require("../Model/Model")

exports.CreateUser = (async (req, res) => {
    try {
            const Data = {
                task_name: req.body.task_name,
                iscomplate: req.body.iscomplate
            }
            User.create(Data, (err, result) => {
                if (err) {
                    res.send({ status: 400, MSG: "User is not Created", data: err })
                }
                else {
                    res.send({ status: 200, MSG: "User Is Created", Data: result })
                }
            })
    } catch (error) {
        console.log(error, "error")
    }
})

// --------------------------GetUser------------------------

exports.GetUser = (async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({ msg: 'User not found' });
        }
        else {
            res.send({ status: 200, MSG: "User Data Finded", Data: users })
        }

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.status(500).send('Server Error');
    }

})


// ---------------------------------GetByID-----------------------------


exports.GetByIDUser = (async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        else {
            res.send({ status: 200, MSG: "User Data Finded", Data: user })
        }
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.status(500).send('Server Error');
    }
})

// ---------------------------------UpdateUser-----------------------

exports.UpdateUser = (async (req, res) => {
    const Data = {
        task_name: req.body.task_name,
        email: req.body.email,
        iscomplate: req.body.iscomplate
    }
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: Data },
            { new: true }
        );
        res.send({ status: 200, MSG: "User Data Finded", Data: user })
    } catch (err) {
        console.error(err.message);
        res.send({ status: 400, MSG: "User is not Update", data: err })
    }
})

// -----------------------------------------DeleteUser--------------------------

exports.deleteUser = (async (req, res) => {
    let Users = await User.deleteOne({ id: req.params.id });
    if (Users) {
        res.status(200).send({
            status: true,
            message: 'Data Delete Successfully.',
        });
    } else {
        res.status(200).send({
            status: true,
            message: 'Currently no data exist.',
        });
    }
})
