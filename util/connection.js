import mongoose from 'mongoose'
export default function connection()
{
    let url =
      "mongodb+srv://Muhammad_Akbar:Akbar.1234@cluster0.63uyc.mongodb.net/?retryWrites=true&w=majority";
    mongoose
      .connect(url)
      .then((res) => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err);
      });
}