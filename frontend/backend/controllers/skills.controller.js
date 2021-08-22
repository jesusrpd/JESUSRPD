import Skill from "../models/skill";

export const getSkills = async (req, res) => {
    const skills = await Skill.find();
    res.status(200).json(skills);
};

export const createSkill = async (req, res) => {
    const { name, port, background, color, clases, category } = req.body;

    const newSkill = new Skill({
        name,
        port,
        background,
        color,
        clases,
        category,
    });
    await newSkill.save();
    res.status(200).json(newSkill);
};

export const deleteSkill = async (req, res) => {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json("Skill delete");
};

export const updateSkill = async (req, res) => {
    const { category } = req.body;
    await Skill.findOneAndUpdate(req.params.id, { category });
    res.status(200).json("Skill Update");
};

export const getCategory = async (req, res) => {
    const lenguague = await Skill.find({ category: req.params.category });
    res.status(200).json(lenguague);
};
