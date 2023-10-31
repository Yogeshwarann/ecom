const express=require("express");
const routerU=express.Router();
const usc=require("./modules/modelU");
routerU.post("/user/insertion",async(req,res)=>{
      console.log(req.body);
      try{
        const { uname, umail, upassword, uadd, phone} = req.body;
        function generateRandomString(length) {
          const charset = "abcdefghijklmnopqrstuv💕xyzABCDEFGHIJKLMNOPQRS❤️😁TUVWXYZ0123456789";
          let result = '';
          for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
          }return result;
        }
        const random = generateRandomString(7);

        // Create a new user instance
        const user = new usc({
        //  umail: umail,
        //  upassword: upassword,
        //  phone: ph,
          uadd: uadd,
        // uname: uname,
          uid: random // You can include this if needed
        });
        await user.save();
        res.status(200).json({message:"yse..",s:true,user});
        console.log("done");
      }catch(error){
        res.status(5000).json({message:"server error"});
      }
});

routerU.post("/user/search", async (req, res) => {
  const um = req.body.ph;
  //const up = req.body.upassword;
  console.log(um);
  //console.log(up);
  try {
    const user = await usc.findOne({
      umail: um,
      upassword: up,
    });
    if (user) {
      console.log("yes");
      res.status(200).json({
        message: "login success",
        success: true,
        user, // Include the user's name directly
      });
    } else {
      console.log("no");
      res.status(401).json({ message: "Phone number is incorrect", success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
});

module.exports=routerU;