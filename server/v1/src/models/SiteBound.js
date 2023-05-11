const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const siteBoundSchema = new Schema({
  site: {
    type: Schema.Types.ObjectId,
    ref: "Site",
  },
  number_of_vertex: Number,
  map_referance_system: Buffer,
});
