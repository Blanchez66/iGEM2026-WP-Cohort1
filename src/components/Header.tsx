interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-hero py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="page-header-title mt-5">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
