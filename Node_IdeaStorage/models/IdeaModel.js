const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema(
    {
        title:{
            type: String
        },
        idea:{
            type: String
        }
    }
)

module.exports = mongoose.model.Idea || mongoose.model("Idea",IdeaSchema)