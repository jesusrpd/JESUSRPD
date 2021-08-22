import Briefcase from "../models/briefcase";

export const getBriefcases = async (req, res) => {
    const briefcases = await Briefcase.find({},{__v: 0});
    res.status(200).json(briefcases);
};

export const createBriefcase = async (req, res) => {
    const {
        title,
        description,
        background,
        color,
        category,
        portImg,
        iconUrl,
        link
    } = req.body;
    const newBriefcase = new Briefcase({
        title,
        description,
        background,
        color,
        category,
        portImg,
        iconUrl,
        link
    });
    await newBriefcase.save();
    res.status(200).json("Briefcase create");
};

export const updateBriefcase = async (req, res) => {
    const brief = await Briefcase.findOneAndUpdate(
        { _id: req.params.id },
        req.body
    );
    res.status(200).json(brief);
};

export const deleteBriefcase = async (req, res) => {
    await Briefcase.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("Briefcase delete");
};

export const categoryBriefcase = async (req, res) => {
    const category = await Briefcase.find({ category: req.params.category });
    res.status(200).json(category);
};
