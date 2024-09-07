import mongoose,{Schema} from "mongoose"
const subscriptionSchema = new Schema({
subscriber:{
type:Schema.Types.ObjectId,//One Who is subscribing
ref:User
},
channel:{
type:Schema.Types.ObjectId,//One Whom Subscriber is subscribing
ref:User                
}
})

export const Subscription = mongoose.model("Subsciption",subscriptionSchema)