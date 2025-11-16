import { loadProfile, updateProfile } from "@/reducer/profileReducer"
import { Button, ButtonGroup, IconButton } from "@/style/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/style/card"
import { Field, FieldGroup, FieldLabel, Input } from "@/style/field"
import { ProfileContainerMain, ProfileDisplayGrid, ProfileField, ProfileLabel, ProfilePic, ProfileValue } from "@/style/profile"
import { SuccessMessage, ErrorMessage } from "@/style/message"
import type { ProfileData } from "@/types"
import { Pen } from "lucide-react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Profile: React.FC<NonNullable<unknown>> = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const [isEdit, setIsEdit] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [userData, setUserData] = useState<ProfileData>({
        userName: "",
        email: "",
        phone: "",
        department: ""
    })

    useEffect(() => {
        dispatch(loadProfile());
    }, [dispatch]);

    useEffect(() => {
        setUserData({ ...profile })
    }, [profile]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData((prevData: ProfileData) => ({
            ...prevData,
            [name]: value,
        }))
        setError("")
    }

    const validateForm = (): boolean => {
        if (!userData.userName?.trim()) {
            setError("Username is required")
            return false
        }
        if (!userData.email?.trim()) {
            setError("Email is required")
            return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userData.email)) {
            setError("Please enter a valid email address")
            return false
        }
        if (userData.phone && !/^\d{10,}$/.test(userData.phone.replace(/\D/g, ''))) {
            setError("Phone must be at least 10 digits")
            return false
        }
        return true
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        setSuccess("")
        if (!validateForm()) {
            return
        }
        dispatch(updateProfile(userData));
        setSuccess("Profile updated successfully!")
        setIsEdit(false)
        setTimeout(() => setSuccess(""), 3000)
    }

    const handleCancel = () => {
        setIsEdit(false)
        setError("")
        setUserData({ ...profile })
    }

    return (
        <ProfileContainerMain>
            <Card $minWidth="400px">
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    {!isEdit && (
                        <IconButton onClick={() => setIsEdit(true)} title="Edit Profile">
                            <Pen size={20} />
                        </IconButton>
                    )}
                </CardHeader>
                <CardContent>
                    <ProfilePic src="/dummy-profile-pic-300x300.png" alt="Profile" />
                    {success && <SuccessMessage>{success}</SuccessMessage>}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {isEdit ? (
                        <form onSubmit={handleSave}>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="userName">User Name</FieldLabel>
                                    <Input
                                        id="userName"
                                        type="text"
                                        name="userName"
                                        value={userData?.userName || ""}
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={userData?.email || ""}
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={userData?.phone || ""}
                                        placeholder="Enter your phone"
                                        onChange={handleChange}
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="department">Department</FieldLabel>
                                    <Input
                                        id="department"
                                        type="text"
                                        name="department"
                                        value={userData?.department || ""}
                                        placeholder="Enter your department"
                                        onChange={handleChange}
                                    />
                                </Field>
                            </FieldGroup>
                            <ButtonGroup>
                                <Button $varient="destroy" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit">Save</Button>
                            </ButtonGroup>
                        </form>
                    ) : (
                        <ProfileDisplayGrid>
                            <ProfileField>
                                <ProfileLabel>User Name</ProfileLabel>
                                <ProfileValue>{userData?.userName || "--"}</ProfileValue>
                            </ProfileField>
                            <ProfileField>
                                <ProfileLabel>Email</ProfileLabel>
                                <ProfileValue>{userData?.email || "--"}</ProfileValue>
                            </ProfileField>
                            <ProfileField>
                                <ProfileLabel>Phone</ProfileLabel>
                                <ProfileValue>{userData?.phone || "--"}</ProfileValue>
                            </ProfileField>
                            <ProfileField>
                                <ProfileLabel>Department</ProfileLabel>
                                <ProfileValue>{userData?.department || "--"}</ProfileValue>
                            </ProfileField>
                        </ProfileDisplayGrid>
                    )}
                </CardContent>
            </Card>
        </ProfileContainerMain>
    )
}