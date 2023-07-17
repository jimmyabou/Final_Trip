import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  Typography,
  Modal,
  IconButton,
  Fab,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TodayIcon from "@mui/icons-material/Today";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { PlannerContext } from "../providers/PlannerContext";
// import axios from 'axios';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PackageDayList from "./PackageDayList";
// import ActivitiesListItem from './ActivitiesListItem';
// import ActivitiesList from "./ActivitiesList";
import { AttractionsContext } from "../providers/AttractionsContext";
import PackageDayModalFav from "./PackageDayModalFav";



const PackageDetails = () => {
  const {
    days,
    newDayTitle,
    setNewDayTitle,
    newDayDescription,
    setNewDayDescription,
    newDayDate,
    setNewDayDate,
    dayAdded,
    setDayAdded,
    isDatePickerOpen,
    toggleDatePicker,
    isOpen,
    setIsOpen,
    attractions,
    selectedAttractions,
    setSelectedAttractions,
    fetchAttractions,
    setFetchAttractions,
    activeDayId,
    setActiveDayId,
    expanded,
    handleDeleteDay,
    handleOpenModal,
    handleCloseModal,
    handleAddAttraction,
    handleRemoveAttraction,
    handleSaveAttractions,
    handleAddDay,
    handleExpand,
    setDays,
    setAttractions,
    fetchDays,
    getAttractions,

    setPackageId,
  } = useContext(PlannerContext);
  const { featuredAttractionsData,
     isLoadingFeatured,
      favAttractionsData,
       isLoadingFav,
        attractionsByCityData,
         isLoadingattractionsByCity,
          attractionsFilteredList,
           isLoadingAttractionsFilteredList } = useContext(AttractionsContext);


  const { packageId } = useParams();

  useEffect(() => {
    fetchDays(packageId);
  }, [dayAdded]);

  useEffect(() => {
    getAttractions();
  }, [fetchAttractions]);

  return (
    <>
      <form
        onSubmit={() => handleAddDay(packageId)}
        style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            label="Title"
            variant="outlined"
            style={{ marginRight: "10px", marginLeft: "20px" }}
            value={newDayTitle}
            onChange={(event) => setNewDayTitle(event.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            style={{ marginRight: "10px" }}
            value={newDayDescription}
            onChange={(event) => setNewDayDescription(event.target.value)}
          />
          <div style={{ position: "relative" }}>
            <CalendarTodayIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={toggleDatePicker}
            />
            <TextField
              style={{ cursor: "pointer" }}
              value={newDayDate.toLocaleDateString()}
              onClick={toggleDatePicker}
            />
            {isDatePickerOpen && (
              <div style={{ position: "absolute", zIndex: "9999" }}>
                <DatePicker
                  inline
                  selected={newDayDate}
                  onChange={(date) => {
                    setNewDayDate(date);
                    toggleDatePicker();
                  }}
                />
              </div>
            )}
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          
            style={{ marginLeft: "20px",padding: '6px 16px', minWidth: 150, maxHeight:50,background: "#51D4BF", fontFamily: "DM Sans",letterSpacing: '0.02rem', borderRadius: '10px',fontSize: '1.3rem' }}
          >
            Add
          </Button>
        </div>
      </form>
      <div style={{ margin: "20px" }}>
        <PackageDayList days={days}></PackageDayList>
      </div>
      <Modal open={isOpen} onClose={handleCloseModal}>
        <Card
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            maxHeight: "90vh",
            maxWidth: "130vw",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h5">Attractions</Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <PackageDayModalFav isOpen={isOpen }selectedAttractions={selectedAttractions} handleAddAttraction={handleAddAttraction} attractions={favAttractionsData} pageTitle={"Your Favorite Experiences"} />


            {attractions.map((attraction) => (
              <Card
                key={attraction.id}
                style={{
                  width: "40vh",
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div style={{ maxHeight: "300px", overflow: "auto" }}>
                  <img
                    src={attraction.pictures[0]}
                    alt="Attraction"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      paddingRight: "16px",
                    }}
                  >
                    <div>
                      <Typography variant="h6">{attraction.country}</Typography>
                      <Typography variant="subtitle1">
                        {attraction.city}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6">
                        Price: ${attraction.price}
                      </Typography>
                      <Typography>
                        Duration: {attraction.duration / 60}hours
                      </Typography>
                    </div>
                  </div>
                  <Typography>{attraction.description}</Typography>
                </div>
                {!selectedAttractions.includes(attraction.attraction_id) && (
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "10px",
                    }}
                  >
                    <Fab
                      color="primary"
                      aria-label="Add Attraction"
                      onClick={() =>
                        handleAddAttraction(attraction.attraction_id)
                      }
                      style={{
                        backgroundColor: "#51D4BF",
                        width: "35px",
                        height: "30px",
                      }}
                    >
                      <AddIcon style={{ fontSize: "32px" }} />
                    </Fab>
                  </div>
                )}
                {selectedAttractions.includes(attraction.attraction_id) && (
                  <DeleteIcon
                    style={{
                      color: "grey",
                      cursor: "pointer",
                      marginLeft: "10px",
                      fontSize: "40px",
                      marginTop: "auto",
                      paddingTop: "10px",
                    }}
                    onClick={() =>
                      handleRemoveAttraction(attraction.attraction_id)
                    }
                  />
                )}
              </Card>
            ))}
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAttractions}
            style={{
              position: "sticky",
              bottom: "10px",
              left: "2000px",
              borderRadius: "10%",
              width: "100px",
              height: "50px",
              zIndex: "999",
              background: "#51D4BF",
            }}
          >
            Save
          </Button>
        </Card>
      </Modal>
    </>
  );
};

export default PackageDetails;