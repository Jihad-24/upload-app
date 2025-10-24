"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

// Placeholder image URLs
import logo from "@/assets/logo.svg";
import loginBackGround from "@/assets/splash-screen.jpg";
import user from "@/assets/user.svg";
import eyeInvisible from "@/assets/eye-invisible.svg";
import eyeVisible from "@/assets/eye-visible.svg";
import { appTheme } from "../plugins/appTheme";
import { InstallButton } from "@/components/InstallButton";
type Country = { id: string; name: string };
type Props = {
  hideInstall?: boolean;
};

const SignupStatic: React.FC = ({ hideInstall = false }: Props) => {
  const [login, setLogin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState<Country | undefined>();
  const [loginError, setLoginError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const countries: Country[] = [
    { id: "1", name: "USA" },
    { id: "2", name: "Canada" },
    { id: "3", name: "Germany" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInputBackgroundColor = (value: string) =>
    value
      ? appTheme.secondaryPalette.mintGreen
      : appTheme.secondaryPalette.mercuryGray;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login) setLoginError("Required");
    if (!phoneNumber) setPhoneNumberError("Required");
    if (!country) setCountryError("Required");
    if (!password) setPasswordError("Required");
    if (password !== confirmPassword)
      setConfirmPasswordError("Passwords must match");
    // Handle submission logic here
  };

  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="relative w-full max-w-md h-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={loginBackGround}
            alt="Signup Screen"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-2 m-4 w-12 h-12 object-contain z-10">
            <Image src={logo} alt="Logo" width={48} height={48} />
          </div>
          <div className="absolute top-8 right-2 m-4 object-contain z-10">
            {!hideInstall && <InstallButton />}
          </div>
        </div>

        {/* Form Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full p-4 bg-white rounded-t-3xl shadow-md">
            <div className="text-center mb-6 flex flex-col gap-2">
              <h1
                className="text-2xl font-semibold"
                style={{ color: appTheme.primaryPalette.black }}
              >
                Sign Up
              </h1>
              <p style={{ color: appTheme.secondaryPalette.silverSand }}>
                Planting Organization
              </p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-4">
              {/* Login */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image src={user} alt="User" className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  className="text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none"
                  placeholder="Login"
                  value={login}
                  onChange={(e) => {
                    setLogin(e.target.value);
                    setLoginError("");
                  }}
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: getInputBackgroundColor(login),
                    border: loginError
                      ? `1px solid ${appTheme.secondaryPalette.errorRed}`
                      : "none",
                  }}
                />
                {loginError && (
                  <p className="text-red-400 text-sm mt-1">{loginError}</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg fill="#305335" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.73 3.88.73a1 1 0 011 1V20a1 1 0 01-1 1C10.75 21 3 13.25 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.25 2.67.73 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  className="text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setPhoneNumberError("");
                  }}
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: getInputBackgroundColor(phoneNumber),
                    border: phoneNumberError
                      ? `1px solid ${appTheme.secondaryPalette.errorRed}`
                      : "none",
                  }}
                />
                {phoneNumberError && (
                  <p className="text-red-400 text-sm mt-1">
                    {phoneNumberError}
                  </p>
                )}
              </div>

              {/* Country */}
              <div ref={countryDropdownRef} className="relative">
                <div
                  className="text-sm rounded-lg block w-full pl-3 pr-10 p-2.5 cursor-pointer"
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: getInputBackgroundColor(
                      country?.name || ""
                    ),
                    border: countryError
                      ? `1px solid ${appTheme.secondaryPalette.errorRed}`
                      : "none",
                  }}
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  {country?.name || "Country"}
                </div>
                {showCountryDropdown && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {countries.map((c) => (
                      <div
                        key={c.id}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                        onClick={() => {
                          setCountry(c);
                          setShowCountryDropdown(false);
                          setCountryError("");
                        }}
                      >
                        {c.name}
                      </div>
                    ))}
                  </div>
                )}
                {countryError && (
                  <p className="text-red-400 text-sm mt-1">{countryError}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="text-sm rounded-lg block w-full pl-2.5 pr-10 p-2.5 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: getInputBackgroundColor(password),
                    border: passwordError
                      ? `1px solid ${appTheme.secondaryPalette.errorRed}`
                      : "none",
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Image
                    src={showPassword ? eyeInvisible : eyeVisible}
                    className="h-4 w-4"
                    alt="Toggle"
                  />
                </button>
                {passwordError && (
                  <p className="text-red-400 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="text-sm rounded-lg block w-full pl-2.5 pr-10 p-2.5 focus:outline-none"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmPasswordError("");
                  }}
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: getInputBackgroundColor(confirmPassword),
                    border: confirmPasswordError
                      ? `1px solid ${appTheme.secondaryPalette.errorRed}`
                      : "none",
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Image
                    src={showConfirmPassword ? eyeInvisible : eyeVisible}
                    className="h-4 w-4"
                    alt="Toggle"
                  />
                </button>
                {confirmPasswordError && (
                  <p className="text-red-400 text-sm mt-1">
                    {confirmPasswordError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-sm font-medium py-2.5 rounded-3xl mt-4"
                style={{
                  color: appTheme.primaryPalette.white,
                  backgroundColor: appTheme.secondaryPalette.darkForestGreen,
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupStatic;
