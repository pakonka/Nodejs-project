import { Request, Response, NextFunction } from "express";
import studentService from "../services/student.service";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await studentService.findAll();
    // Chỉ giữ lại các trường cần thiết
    const filteredStudents = students.map(
      ({ __v, createdAt, updatedAt, ...rest }) => rest
    );
    res.status(200).json({
      message: "Thành công",
      data: filteredStudents,
    });
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const student = await studentService.findById(id);
    // Chỉ giữ lại các trường cần thiết
    const { __v, createdAt, updatedAt, ...rest } = student;
    res.status(200).json({
      message: "Thành công",
      data: rest,
    });
  } catch (error) {
    next(error);
  }
};

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const student = await studentService.createRecord(req.body);
    // Chỉ giữ lại các trường cần thiết
    const { __v, createdAt, updatedAt, ...rest } = student;
    res.status(201).json({
      message: "Thành công",
      data: rest,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  findAll,
  findById,
  createRecord,
};
