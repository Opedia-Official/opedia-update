import { ExpertTeam, ViewService, Gallary, ProjectCount,dataPricing, TestimonialSliderData } from "../../Utils/fakeData"


export default function handler(req, res) {
    res.status(200).json({ ExpertTeam, ViewService, Gallary, ProjectCount,dataPricing, TestimonialSliderData });
}