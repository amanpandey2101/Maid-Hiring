
const User = require('../../models/user')

exports.usersList = async (req, res) => {
    try{
        const users = await User.find({role:'user'}).sort({createdAt: -1});
        res.json(users)
    }catch(error){
        res.status(500).json({error:'Error fetching Data'})
    }
}

exports.updateStatus = async (req, res) => {
    try{
       const { userId} = req.params;
       const {newStatus} = req.body;

       const user = await User.findById(userId);
       if (!user) {
         return res.status(404).json({ message: 'User not found' });
       }

       user.status = newStatus;
       await user.save();
       return res.status(200).json({ message: 'Status updated successfully', user });

    }catch(error){
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
}