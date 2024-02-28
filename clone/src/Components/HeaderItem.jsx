function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-sm md:text-base lg:text-lg font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
