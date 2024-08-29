import { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Button } from '../ui/button';

interface ActionDrawerProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  onSubmit: (onClose: () => void) => void;  // Update this line to pass the handleClose function
}

export function ActionDrawer({
  trigger,
  title,
  description,
  children,
  onSubmit,
}: ActionDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div
          onClick={handleOpen}
          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 py-2 px-4"
        >
          {trigger}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <Button
              className="bg-[#462E95] text-white hover:bg-[#462E95]"
              onClick={() => onSubmit(handleClose)}
            >
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
