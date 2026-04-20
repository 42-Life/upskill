import {TextField, Autocomplete} from '@mui/material'
import {allCourses} from "@/lib/data/courses";
import {useRouter} from "next/navigation";
import {THEME_COLORS} from "@/lib/aux/styles";
// import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
    const router = useRouter()

    return(
        <Autocomplete
            disablePortal
            options={allCourses}
            groupBy={(course) => course.category[0].slice(0,1).toUpperCase()+course.category[0].slice(1,)} // text formatting for grouped searching (ensure capital letter : profesionalism)
            getOptionLabel={(course) => course.title} // get titles only for search labels
            sx={{width: '100%', backgroundColor: THEME_COLORS.darkShade, borderRadius: '10px', m:"5%"}}
            onChange={(_, selection) =>{
                if (selection) router.push(`/course/${selection.id}`);
            }}
            renderInput={(params) => <TextField
                {...params}
                placeholder={"Search our courses..."}
                sx={{backgroundColor: THEME_COLORS.background}}
            />}
        />
    );
}

//