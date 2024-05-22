import { model, Schema } from "mongoose";

const appoitmentModel = new Schema({

    ownerName: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: String,
        enum: Object.values(StatusEnum),
        default: StatusEnum.PENDING,
    },
    practiceArea: {
        type: String
    },
    timeSlot: {
        type: String
    },
    date: {
        type: String
    },
}, { timeStamp: true });

const Appointment = model("Appointment", appoitmentModel);
export default Appointment;