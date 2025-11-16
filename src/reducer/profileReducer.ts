
import type { ProfileData } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProfileData = {
    userName: "",
    email: "",
    phone: "",
    department: ""
};

const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {
        loadProfile: (state) => {
            const data = localStorage.getItem("profileData");
            let parsedProfile: ProfileData | null = null;
            if (data) {
                try {
                    parsedProfile = JSON.parse(data) as ProfileData;
                    if (parsedProfile) {
                        state.userName = parsedProfile.userName;
                        state.email = parsedProfile.email;
                        state.phone = parsedProfile.phone;
                        state.department = parsedProfile.department;
                    }
                } catch (error) {
                    console.error("Failed to parse profileData from localStorage:", error);
                    parsedProfile = null;
                }
            }
        },
        updateProfile: (state, action: PayloadAction<ProfileData>) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.department = action.payload.department;
            localStorage.setItem("profileData", JSON.stringify(state));
        }
    },
});

export const { updateProfile, loadProfile } = profile.actions;
export { profile };
