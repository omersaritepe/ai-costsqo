const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const siteSchema = new Schema(
  {
    geometry: {
      type: {
        type: String,
        enum: ["Polygon", "MultiPolygon"],
        required: true,
      },
      coordinates: {
        type: [[[Number]]],
        required: true,
      },
    },
    properties: {
      name: String,
      company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
      },
      referance: {
        type: String,
        enum: ["WGS-84", "ECET"],
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
