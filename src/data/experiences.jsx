import nuamBanner from '../assets/workExperience/nuam-banner.png';
import bvcBanner from '../assets/workExperience/bvc-banner.png';
import peribanner from '../assets/workExperience/periferia-banner.jpg';

export default function ExperienceData() {
    return [
        {
            companyName: "Periferia IT Group",
            Role: "Devops Engineer",
            inDate: "Apr. 2025",
            outDate: "Agu. 2025",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHLraOfU8gd-g/company-logo_200_200/company-logo_200_200/0/1643397699210/periferia_it_group_logo?e=2147483647&v=beta&t=AiBFYm0duSOVF10ZQx1brPdzyY19G6D2zh8BHQ0K9uk",
            banner: peribanner,
            description: "Periferia es una compañia de tecnología que se especializa en el desarrollo de software y soluciones tecnológicas innovadoras. Con un enfoque en la calidad y la eficiencia, Periferia trabaja con clientes de diversas industrias para ofrecer soluciones personalizadas.",
            technologies: ["Azure devops", "AWS", "Terraform"],
            technologiesImg: ["https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d28_62f25e0037dc73b07553db89_62e129061449c93a6a2041c0_azur%252520(2).png",
                "https://dxc.scene7.com/is/image/dxc/AWS_logo-1050x1050?qlt=90&wid=1200&ts=1748557242421&$square_desktop$&dpr=off",
                "https://s3-ap-southeast-2.amazonaws.com/content-prod-529546285894/2020/03/tf.png"]
        },
        {
            companyName: "Nuam Exchange",
            Role: "Software Development Engineer",
            inDate: "Apr. 2025",
            outDate: "Dec. 2025",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFrWRBdkBcWLw/company-logo_200_200/company-logo_200_200/0/1700077033287/nuamexchange_logo?e=2147483647&v=beta&t=BOmOElO6MMM60JD7yvNXl5AuIIEcX8wuZmGi25o3A1A",
            banner: nuamBanner,
            description: "nuam exchange es la holding regional de las bolsas de valores de colombia, Chile y Peru, ofreciendo una plataforma de intercambio de activos digitales que permite a los usuarios comprar, vender e intercambiar criptomonedas de manera segura y eficiente.",
            technologies: ["GH Actions", "Kubernetes", "Python"],
            technologiesImg: ["https://github.gallerycdn.vsassets.io/extensions/github/vscode-github-actions/0.27.2/1749139672616/Microsoft.VisualStudio.Services.Icons.Default",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/500px-Kubernetes_logo_without_workmark.svg.png",
                "https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png"]
        },
        {
            companyName: "Bolsa de Valores de Colombia",
            Role: "Software Development Analyst",
            inDate: "Apr. 2025",
            outDate: "Dec. 2025",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFwmbfvNbCHOQ/company-logo_200_200/company-logo_200_200/0/1738690598554/bvccolombia_logo?e=2147483647&v=beta&t=-7tbfjWSuMR2A3r7nhLnsGP6kLpam4XSW_c8mIfG3Qc",
            banner: bvcBanner,
            description: "Bolsa de Valores de Colombia es una institución financiera que facilita la negociación de valores y activos financieros en Colombia, proporcionando un mercado eficiente y transparente para inversores y emisores.",
            technologies: ["SvelteKit", "AWS", "Python"],
            technologiesImg: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
                "https://dxc.scene7.com/is/image/dxc/AWS_logo-1050x1050?qlt=90&wid=1200&ts=1748557242421&$square_desktop$&dpr=off",
                "https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png"]
        }
    ]
}