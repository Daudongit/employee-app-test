<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest; 
use App\Employee;
use App\Helpers\UploadImage;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();

        return response()->json(
            ['success'=>true,'data'=>$employees],200
        );
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequest $request,UploadImage $uploadImageHelper)
    {   
        if($request->profile_image){
            $imageName = $uploadImageHelper->saveBase64(
                $request->profile_image,$request->full_name
            );
            $request->merge(['profile_image' => $imageName]);
        }else {
            $request->merge(['profile_mage'=>'blank.png']);
        }

        $employee = Employee::create($request->all());
        return response()->json(['success'=>true,'data'=>$employee],201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeRequest $request, Employee $employee,UploadImage $imgHelper)
    {   
        $profileImage = $request->profile_image;
        if(isset($profileImage) && $profileImage != $employee->profile_image){
            $imageName = $imgHelper->delete($employee->profile_image)
                ->saveBase64($profileImage,$request->full_name);
            $request->merge(['profile_image' => $imageName]);
        }

        $employee->fill($request->all())->save();
        return response()->json([
            'success'=>true,
            'data'=>$employee
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee,UploadImage $uploadImageHelper)
    {   
        $profileImage = $employee->profile_image;
        if(isset($profileImage) && $profileImage!='blank.png'){
            $uploadImageHelper->delete($employee->profile_image);
        }

        if($employee->delete())
		{
			return response()->json([
                'success'=>true,
                'message'=>'employee deleted'
            ],202);
		}
    }
}
