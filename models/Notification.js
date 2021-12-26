import mongoose from "mongoose";
import { Timestamp } from "bson";

const Notification = mongoose.Schema({
    barang_id: {
        type: String,
        require: true
    },
    nama: {
        type: String,
        require: true
    },
    kondisi: {
        type: String
    },
    jumlah: {
        type: Number,
        require: true
    },
    jenis: {
        type: String
    },
},{
    timestaps: true,
});

export default mongoose.model("Notifications", Notification);