const {AddStartupModel, StartupDataModel} = require('../../../model/StartupModel');
const AddStartup = async(req, res) => {
    const {basic, official, founder, description} = req.body;

    const{startup_name, startup_program, startup_type, startup_industry, startup_tech, program, cohort} = basic;

    const{official_contact_number, official_email_address, website_link, linkedin_id, mentor_associated, registration_number, password} = official;

    const{founder_name, founder_email, founder_number, founder_gender, founder_student_id, linkedInid} = founder;

    const{logo_image, startup_description} = description;

    if(!startup_name || !official_email_address || !program || !official_contact_number || !description)
    {
        res.json("Please fill necessary fields");
    }
    else
    {
        try
        {
            const result = await AddStartupModel(basic, official, founder, description, official_email_address);
            res.status(200).send(result);
        }
        catch(err)
        {
                // if(err.code==='23505')
                // {
                //     res.status(409).json({Error: "Startup already exists" })
                // }
                res.send(err);
        }
    }
}

const FetchStartupDatainNumbers = async(req, res) => {
    try
    {
        const result = await StartupDataModel();
        const startupData = {
            startup_total: result.TotalCountStartups.rows[0].startup_total,
            active_startups: result.ActiveStartups.rows[0].active,
            dropped_startups: result.DroppedStartups.rows[0].dropped_status,
            graduated_startups: result.GraduatedStartups.rows[0].graduated_status
        }
        res.status(200).json(startupData);
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error fetching startup data', error: err }); // Send error with status 500
    }
}

module.exports = {AddStartup, FetchStartupDatainNumbers};