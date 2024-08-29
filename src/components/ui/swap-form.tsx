import { Button } from './button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './card';
import InputField from './input-field';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

export function TabsDemo() {
  return (
    <Tabs defaultValue="supply-token" className="w-full max-w-md mx-auto">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2">
        <TabsTrigger
          value="supply-token"
          className="bg-gray-200 data-[state=active]:bg-black data-[state=active]:text-[#EEAA45]"
        >
          Supply
        </TabsTrigger>
        <TabsTrigger
          value="borrow-token"
          className="bg-gray-200 data-[state=active]:bg-black data-[state=active]:text-[#EEAA45]"
        >
          Borrow 
        </TabsTrigger>
        <TabsTrigger
          value="repay-token"
          className="bg-gray-200 data-[state=active]:bg-black data-[state=active]:text-[#EEAA45]"
        >
          Repay 
        </TabsTrigger>
        <TabsTrigger
          value="withdraw-token"
          className="bg-gray-200 data-[state=active]:bg-black data-[state=active]:text-[#EEAA45]"
        >
          Withdraw 
        </TabsTrigger>
      </TabsList>
      <TabsContent value="supply-token">
        <Card>
        <CardHeader className='m-5 md:m-0'>
            <CardDescription>Input token below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <InputField label="Supply" />
          </CardContent>
          <CardFooter>
            <Button className="text-[#EEAA45]">Supply token</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="borrow-token">
        <Card>
          <CardHeader className='m-5 md:m-0'>
            <CardDescription>Input token below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <InputField label="Borrow" />
          </CardContent>
          <CardFooter>
            <Button className="text-[#EEAA45]">Borrow token</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="repay-token">
        <Card>
        <CardHeader className='m-5 md:m-0'>
            <CardDescription>Input token below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <InputField label="Repay" />
          </CardContent>
          <CardFooter>
            <Button className="text-[#EEAA45]">Repay token</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="withdraw-token">
        <Card>
        <CardHeader className='m-5 md:m-0'>
            <CardDescription>Input token below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <InputField label="Withdraw" />
          </CardContent>
          <CardFooter>
            <Button className="text-[#EEAA45]">Withdraw token</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
