import { Schema, model, models } from "mongoose"

const WineSchema = new Schema({
	name: {
		type: String,
		required: [true, "Skriv venligst et navn"]
	},
	year: {
		type: Number,
		required: [true, "Udfyld venligst årgang"]
	},
	type: {
		type: String,
		required: [true, "Udfyld type: Rød, hvid, rosé..."]
	},
	sort: {
		type: String,
		required: [true, "Udfyld druesort"]
	},
}, { timestamps: true })

export { WineSchema }

export default models.Wine || model("Wine", WineSchema)
